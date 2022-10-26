import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>food plan</h1>
        <div className="food">
            <h2 className="food__date">14.10.2022</h2>
            <div className="food__menu">
                <div className="menu__number-list">
                    <h2>1</h2>
                    <div className="menu__list">
                        <div className="title">
                            <h4>Блюдо</h4>
                            <h4>Кол-во</h4>
                            <h4>Белки</h4>
                        </div>
                        <div className="menu__list_container">
                            <ul className="items-list">
                                <li className="item">
                                    <ul>
                                        <li>яйцо жареное</li>
                                        <li>2</li>
                                        <li>12</li>
                                    </ul>
                                </li>
                                <li className="item">
                                    <ul>
                                        <li>яйцо жареное</li>
                                        <li>2</li>
                                        <li>12</li>
                                    </ul>
                                </li>
                                <li className="item">
                                    <ul>
                                        <li>яйцо жареное</li>
                                        <li>2</li>
                                        <li>12</li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="result">
                                <div className="water">Вода: <span>0.5</span></div>
                                <div className="protein-result">Всего белков: <span>36</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-cont">
                        <button className="add">Добавить</button>
                        <button className="edit">Редактировать</button>
                        <button className="remove">Удалить</button>
                    </div>
                </div>
                <div className="menu__number-list">
                    <h2>2</h2>
                    <div className="menu__list">
                        <div className="title">
                            <h4>Блюдо</h4>
                            <h4>Кол-во</h4>
                            <h4>Белки</h4>
                        </div>
                        <div className="menu__list_container">
                            <ul className="items-list">
                                <li className="item">
                                    <ul>
                                        <li></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="result">
                                <div className="water">Вода: <span>0</span></div>
                                <div className="protein-result">Всего белков: <span>0</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-cont">
                        <button className="add">Добавить</button>
                        <button className="edit">Редактировать</button>
                        <button className="remove">Удалить</button>
                    </div>
                </div>
                <div className="menu__number-list">
                    <h2>3</h2>
                    <div className="menu__list">
                        <div className="title">
                            <h4>Блюдо</h4>
                            <h4>Кол-во</h4>
                            <h4>Белки</h4>
                        </div>
                        <div className="menu__list_container">
                            <ul className="items-list">
                                <li className="item">
                                    <ul>
                                        <li></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="result">
                                <div className="water">Вода: <span>0</span></div>
                                <div className="protein-result">Всего белков: <span>0</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-cont">
                        <button className="add">Добавить</button>
                        <button className="edit">Редактировать</button>
                        <button className="remove">Удалить</button>
                    </div>
                </div>
                <div className="menu__number-list">
                    <h2>4</h2>
                    <div className="menu__list">
                        <div className="title">
                            <h4>Блюдо</h4>
                            <h4>Кол-во</h4>
                            <h4>Белки</h4>
                        </div>
                        <div className="menu__list_container">
                            <ul className="items-list">
                                <li className="item">
                                    <ul>
                                        <li></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="result">
                                <div className="water">Вода: <span>0</span></div>
                                <div className="protein-result">Всего белков: <span>0</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-cont">
                        <button className="add">Добавить</button>
                        <button className="edit">Редактировать</button>
                        <button className="remove">Удалить</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
