import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Survey() {
  const { questionNumber } = useParams();
  const numberquest = parseInt(questionNumber);
  const prevnumber = numberquest === 1 ? 1 : numberquest - 1;
  const nextnumber = numberquest + 1;
  return (
    <div>
      <h1>Questionnaire 🧮 </h1>
      <h2>Question {questionNumber}</h2>
      <Link to={`/survey/${prevnumber}`}>precedent</Link>
      {numberquest === 10 ? (
        <Link to="/results">Résultat</Link>
      ) : (
        <Link to={`/survey/${nextnumber}`}>Suivant</Link>
      )}
    </div>
  );
}

export default Survey;
