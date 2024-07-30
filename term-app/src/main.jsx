import './index.css';
import { TermCard } from './TermCard';
import { createRoot } from 'react-dom/client';
import { TermList } from './TermList';

//напишем функцию добавления списка в локалсторедж
function saveTermList(terms) {
  localStorage.setItem('termsList', JSON.stringify(terms));
}
//напишем функцию извлечения списка из локалсторедж
function restoreTermList() {
  const rawTermList = localStorage.getItem('termsList');
  if (!rawTermList) {
    return [];
  } 
    return JSON.parse(rawTermList);
}

//добавим массив терминов
// let terms = [];
let terms = restoreTermList();

const descriptionList = document.getElementById('description-list');
const reactRoot = createRoot(descriptionList);


function syncTermList() {
  //вызываем функцию добавления в локалсторедж для синхронизации списка
  saveTermList(terms);
  //передаем список в качестве пропса в термлист
  reactRoot.render(<TermList terms={terms} onDelete={deleteItem}/>);
}

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
  //  reactRoot.render(<TermList terms={terms} />);
   syncTermList();
} 

//добавим функцию удаления терминов из списка
function deleteItem(id) {
  terms = terms.filter((term) => term.id !== id);
  // reactRoot.render(<TermList terms={terms} />);  //добавляем рендер что бы сообщить реакту что в списке произошли изменения
  syncTermList();
}


// const descriptionList = document.getElementById('description-list');
// const reactRoot = createRoot(descriptionList);

//передаем список в качестве пропса в термлист
// reactRoot.render(<TermList terms={terms} />);
syncTermList();

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
