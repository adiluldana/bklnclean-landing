import React, { useState } from 'react'
import { BookingFormValues, IExtra } from './BookingForm'

type Props = {
    extra: IExtra,
    setFormValues: (value: React.SetStateAction<BookingFormValues>) => void,
    calculate: () => void
}

const BookingExtraItem = (props: Props) => {
    const [counter, setCounter] = useState<number>(1)
    const [active, setActive] = useState<boolean>(false)

    const handleCounter = (x: string) => {
        setCounter((prevCounter) => {
            let newCounter = prevCounter;
            if (x == '-' && prevCounter > 1) {
                newCounter = prevCounter - 1
            } else if (x == '+') {
                newCounter = prevCounter + 1
            } else if (x != '-') {
                newCounter = +x
            }
            if (newCounter != prevCounter) {
                props.setFormValues((prev) => {
                    prev.extras = prev.extras.map((m) => {
                        if (m.id == props.extra.id) {
                            m.counter = newCounter
                        }
                        return m
                    })
                    return prev
                });
                props.calculate()
            }
            return newCounter
        })
    }

    const handleClick = (event: React.MouseEvent) => {
        if (!(event.target as HTMLElement).closest('.counter-item')) {
            setActive((prev) => {
                let status = !prev;
                props.setFormValues((prev) => {
                    if (status) {
                        prev.extras.push({
                            ...props.extra,
                            counter
                        })
                    } else {
                        prev.extras = prev.extras.filter(m => m.id != props.extra.id)
                    }
                    return prev
                });
                props.calculate()
                return status
            })
        }
    };

    return (
        <div className={"extra-item " + (active && 'active')} onClick={handleClick}>
            {
                active && <div className="active-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                </div>
            }
            <div className="icon">
                <img src={props.extra.icon} alt="" />
            </div>
            <div className="text">
                <h5>{props.extra.title}</h5>
                {
                    active && props.extra.needCounter && <div className='d-flex counter-item' style={{ gap: 6 }}>
                        <button type="button" onClick={() => handleCounter('-')}>-</button>
                        <input type="number" className='form-control' value={counter} min={1} onChange={(e) => handleCounter(e.target.value)} />
                        <button type="button" onClick={() => handleCounter('+')}>+</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default BookingExtraItem