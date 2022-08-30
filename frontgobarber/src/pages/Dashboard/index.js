/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect, useMemo, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { utcToZonedTime } from 'date-fns-tz';
import api from '../../services/api';

import { Container, Time } from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [schedule, setSchedule] = useState([]);
  const formattedDate = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date],
  );

  const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('/schedule', {
        params: { date },
      });

      console.tron.log(response);

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map(hour => {
        const compareDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        // const compareDate = utcToZonedTime(exactHour, timezone);

        const appointment = response.data.find(
          a =>
            String(new Date(utcToZonedTime(a.date, timezone))).localeCompare(
              String(compareDate),
            ) === 0,
        );
        // String(a.date).slice(0, -5)

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment,
        };
      });

      setSchedule(data);
    }

    loadSchedule();
  }, [date]);

  function handleChangeDay(index) {
    if (index === -1) {
      setDate(subDays(date, 1));
    } else {
      setDate(addDays(date, 1));
    }
  }

  console.tron.log(schedule);
  return (
    <Container>
      <header>
        <button onClick={() => handleChangeDay(-1)} type="button">
          <MdChevronLeft size={36} color="#FFF" />
        </button>
        <strong>{formattedDate}</strong>
        <button onClick={() => handleChangeDay(1)} type="button">
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>

      <ul>
        {schedule.map(time => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : 'Em Aberto'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
