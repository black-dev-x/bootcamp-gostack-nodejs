import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  ManyToOne,
  JoinColumn
} from 'typeorm'
import User from '../users/user.model'

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id?: string

  @Column({ name: 'provider_id' })
  providerId?: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'provider_id' })
  provider?: User

  @Column('timestamp with time zone')
  date?: Date

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date
}

export default Appointment
