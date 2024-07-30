import { TermCard } from "./TermCard";
import './TermList.css';

// const terms = [
//     {
//         title: "React",
//         description: "Библиотека для создания пользовательских интерфейсов"
//     },
//     {
//         title: "Angular",
//         description: "Библиотека для создания пользовательских интерфейсов"
//     },
//     {
//         title: "Vue",
//         description: "Библиотека для создания пользовательских интерфейсов"
//     }
// ];

//теперь сделаем так что бы компонент термлист обрабатывал входящий 
//проп в виде списка из main.jsx
export const TermList = ({terms}) => {
    return (
    <ul className="term-list">
        {terms.map((item) => (
            //добавляем ключ
            <li className="term-list__item" key={item.id}>
                <TermCard
                    title={item.title}
                    description={item.description}
                />
            </li>
        ))}

{/* 
        <li>
            <TermCard
                title="React"
                description="Библиотека для создания пользовательских интерфейсов"
            />
        </li>
        <li>
            <TermCard
                title="Angular"
                description="Библиотека для создания пользовательских интерфейсов"
            />
        </li>
        <li>
            <TermCard 
                title="Vue"
                description="Библиотека для создания пользовательских интерфейсов"
            />
        </li> */}
    </ul>
    );
};