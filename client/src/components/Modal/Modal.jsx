import React, { useState } from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import './Modal.css';
import { useDispatch, useSelector } from 'react-redux';

const Modal = (props) => {
  const dispatch = useDispatch();

  const game1 = useSelector((store) => store.game1); // game1[0].answer
  const game2 = useSelector((store) => store.game2); // game2[0].answer
  const game3 = useSelector((store) => store.game3); // game3[0].answer
  const game4 = useSelector((store) => store.game4); // game4[0].answer
  const game5 = useSelector((store) => store.game5); // game5[0].answer
  const [rigth, setRigth] = useState(false);

  const answer = useSelector((store) => store.inputs.answer);

  const check = () => {
    if (answer === game1[0].answer) {
      setRigth(true);
      console.log('btn');
      console.log(answer);
      console.log(game1[0].answer);
    }

    if (answer === game1[1].answer) {
      setRigth(true);
      console.log('btn');
      console.log(answer);
      console.log(game1[1].answer);
    }

    if (answer === game1[2].answer) {
      setRigth(true);
      console.log('btn');
      console.log(answer);
      console.log(game1[2].answer);
    }

    if (answer === game1[3].answer) {
      setRigth(true);
      console.log('btn');
      console.log(answer);
      console.log(game1[3].answer);
    }

    // ----------

    if (answer === game2[0].answer) {
      setRigth(true);
      console.log('btn');
      console.log(answer);
      console.log(game2[0].answer);
    }

    if (answer === game2[1].answer) {
      setRigth(true);
      console.log('btn');
      console.log(answer);
      console.log(game2[1].answer);
    }

    if (answer === game2[2].answer) {
      setRigth(true);
      console.log('btn');
      console.log(answer);
      console.log(game2[2].answer);
    }

    if (answer === game2[3].answer) {
      setRigth(true);
      console.log('btn');
      console.log(answer);
      console.log(game2[3].answer);
    }

    // ----------

    if (answer === game3[0].answer) {
      setRigth(true);
      console.log('btn');
      console.log(answer);
      console.log(game3[0].answer);
    }

    if (answer === game3[1].answer) {
      setRigth(true);
      console.log('btn');
      console.log(answer);
      console.log(game3[1].answer);
    }

    if (answer === game3[2].answer) {
      setRigth(true);
      console.log('btn');
      console.log(answer);
      console.log(game3[2].answer);
    }

    if (answer === game3[3].answer) {
      setRigth(true);
      console.log('btn');
      console.log(answer);
      console.log(game3[3].answer);
    }

    // ------------

    if (answer === game4[0].answer) {
      setRigth(true);
      console.log('btn');
      console.log(answer);
      console.log(game4[0].answer);
    }

    if (answer === game4[1].answer) {
      setRigth(true);
      console.log('btn');
      console.log(answer);
      console.log(game4[1].answer);
    }

    if (answer === game4[2].answer) {
      setRigth(true);
      console.log('btn');
      console.log(answer);
      console.log(game4[2].answer);
    }

    if (answer === game4[3].answer) {
      setRigth(true);
      console.log('btn');
      console.log(answer);
      console.log(game4[3].answer);
    }

    // ------------

    if (answer === game5[0].answer) {
      setRigth(true);
      console.log('btn');
      console.log(answer);
      console.log(game5[0].answer);
    }

    if (answer === game5[1].answer) {
      setRigth(true);
      console.log('btn');
      console.log(answer);
      console.log(game5[1].answer);
    }

    if (answer === game5[2].answer) {
      setRigth(true);
      console.log('btn');
      console.log(answer);
      console.log(game5[2].answer);
    }

    if (answer === game5[3].answer) {
      setRigth(true);
      console.log('btn');
      console.log(answer);
      console.log(game5[3].answer);
    }

    // dispatch({
    //   type: 'INPUT_CLEAR',
    //   payload: {},
    // });
  };

  // if (!props.isOpened) {
  //   dispatch({
  //     type: 'INPUT_CLEAR',
  //     payload: {},
  //   });
  // }

  console.log(props.isOpened);

  return (
    <div
      className={`modal-wrapper ${props.isOpened ? 'open' : 'close'}`}
      style={{ ...props.style }}
    >
      <div className="modal-body">
        <div className="modal-close" onClick={props.onModalClose}>
          ✕
        </div>
        <h2>{props.question}</h2>
        <div className="modal-answer">
          <Input
            onChange={(event) =>
              dispatch({
                type: 'INPUT_TYPING',
                payload: { answer: event.target.value },
              })
            }
            type="text"
            placeholder="Ваш ответ"
          />
          <button className="btn-hide" onClick={check}>
            отправить
          </button>
          <div>{rigth && <p>Ответ правильный</p>}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
