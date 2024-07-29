import './index.css';
import { TermCard } from './TermCard';
import { createRoot } from 'react-dom/client';
import { TermList } from './TermList';


const descriptionList = document.getElementById('description-list');
const reactRoot = createRoot(descriptionList);
reactRoot.render(<TermList />);

//не будет работать
// descriptionList.append(<TermCard />);

const form = document.getElementById('add-description');

form.addEventListener('submit', (event) => {
  // Отменяем поведение по умолчанию
  event.preventDefault();

  // Получаем значения полей формы
  const title = form.elements['title'].value;
  const description = form.elements['description'].value;

  // Сбрасываем форму
  form.reset();

  // Выводим термин в консоль
  console.log(title, description);
});
