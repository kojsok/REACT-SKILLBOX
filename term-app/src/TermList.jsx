import { TermCard } from "./TermCard";
import './TermList.css';

export const TermList = () => {
    return (
    <ul className="term-list">
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
        </li>
    </ul>
    );
};