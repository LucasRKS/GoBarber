import { startOfDay } from 'date-fns';

import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface RequestDTO {
    provider: string;
    date: Date;
}

class CreateAppointmentService {
    private appointmentsRepisotory: AppointmentsRepository;

    constructor(appointmentsRepository: AppointmentsRepository) {
        this.appointmentsRepisotory = appointmentsRepository;
    }

    public execute({ provider, date }: RequestDTO): Appointment {
        const appointmentDate = startOfDay(date);

        const findAppointmentInSameDate = this.appointmentsRepisotory.findByDate(
            appointmentDate,
        );

        if (findAppointmentInSameDate) {
            throw Error('This appointment is alredy booked.');
        }

        const appointment = this.appointmentsRepisotory.create({
            provider,
            date: appointmentDate,
        });

        return appointment;
    }
}

export default CreateAppointmentService;
