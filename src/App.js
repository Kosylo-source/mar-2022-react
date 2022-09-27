import React from 'react';
import Characters from "./components/Characters";
function App(props) {
  return (
      <div>
<Characters
    name={'Bart'}
    surname={'Simpson'}
    age={10}
    info={'Бартоломю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі'}
    photo={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
    alt={'Bart'}
/>
          <Characters
    name={'Homer'}
    surname={'Simpson'}
    age={40}
    info={'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий..'}
    photo={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
    alt={'Homer'}
/>
      </div>
  );
}

export default App;

