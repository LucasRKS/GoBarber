import { Router } from 'express';
import { startOfDay, parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.get('/', (req, res) => {
    const appointments = appointmentsRepository.all();

    return res.json(appointments);
});

appointmentsRouter.post('/', (req, res) => {
    const { provider, date } = req.body;

    const parsedDate = startOfDay(parseISO(date));

    const findAppointmentInSameDate = appointmentsRepository.findByDate(
        parsedDate,
    );

    if (findAppointmentInSameDate) {
        return res
            .status(400)
            .json({ message: 'This appointment is alredy booked.' });
    }

    const appointment = appointmentsRepository.create(provider, parsedDate);

    return res.json(appointment);
});

export default appointmentsRouter;
