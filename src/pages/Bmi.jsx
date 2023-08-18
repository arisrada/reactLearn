import React, {useState} from 'react';

function Bmi() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);

  const calculateBmi = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
    }
  };
  return (
    <div>
    <form>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Enter your height" required></input><br></br>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Enter your weight" required></input><br></br>
        <button class="button" type="button" onClick={calculateBmi}>Calculate BMI</button>
        {bmi && <p>Your BMI is: {bmi}</p>}
    </form>
    </div>
    
  )
}

export default Bmi