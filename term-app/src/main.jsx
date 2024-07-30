import './index.css';
import { TermCard } from './TermCard';
import { createRoot } from 'react-dom/client';
import { TermList } from './TermList';

//добавим массив терминов
let terms = [];

//добавим функцию для добавления терминов
function addTerm(title, description) {
  terms.push(
    {
      //добавляем уникальный индентификатор для ключа
      id: crypto.randomUUID(),  //Date.now() еще можно использовать
      title,
      description,
    });
    //добавляем сортировку терминов по алфавиту
   terms.sort((term1, term2) => (term1.title > term2.title ? 1 : -1));
   //добавляем рендеринг нашего компонента
   reactRoot.render(<TermList terms={terms} />);
} 


const descriptionList = document.getElementById('description-list');
const reactRoot = createRoot(descriptionList);

//передаем список в качестве пропса в термлист
reactRoot.render(<TermList terms={terms} />);

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
  // console.log(title, description);
  addTerm(title, description);
});
