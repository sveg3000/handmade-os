import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();
    const [activePage, setActivePage] = useState('home');
    const [user, setUser] = useState({ name: 'Анна', email: 'anna@example.com', plan: 'Free', niche: 'Свечи и ароматы' });
    const [showOrderModal, setShowOrderModal] = useState(false);
    const [showMaterialModal, setShowMaterialModal] = useState(false);

    // Загружаем данные при входе
    useEffect(() => {
        const savedUser = localStorage.getItem('hmo_user');
        if (savedUser) setUser(JSON.parse(savedUser));
        const savedPlan = localStorage.getItem('hmo_plan');
        if (savedPlan) setUser(prev => ({ ...prev, plan: savedPlan }));
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    const handleChangePlan = () => {
        navigate('/plans');
    };

    const handleSaveProfile = () => {
        localStorage.setItem('hmo_user', JSON.stringify(user));
        alert('✅ Профиль сохранён!');
    };

    return (
        <div className="dashboard-container">
            {/* САЙДБАР */}
            <aside className="sidebar">
                <div className="sidebar-logo">
                    <div className="logo-icon">🌸</div>
                    <div>HandmadeOS</div>
                </div>
                <nav>
                    <div className={`nav-item ${activePage === 'home' ? 'active' : ''}`} onClick={() => setActivePage('home')}>
                        <span>🏠</span><span>Главная</span>
                    </div>
                    <div className={`nav-item ${activePage === 'orders' ? 'active' : ''}`} onClick={() => setActivePage('orders')}>
                        <span>📋</span><span>Заказы</span>
                    </div>
                    <div className={`nav-item ${activePage === 'materials' ? 'active' : ''}`} onClick={() => setActivePage('materials')}>
                        <span>📦</span><span>Материалы</span>
                    </div>
                    <div className={`nav-item ${activePage === 'profile' ? 'active' : ''}`} onClick={() => setActivePage('profile')}>
                        <span>👤</span><span>Профиль</span>
                    </div>
                </nav>
            </aside>

            {/* ОСНОВНОЙ КОНТЕНТ */}
            <main className="main-content">

                {/* СТРАНИЦА: ГЛАВНАЯ */}
                {activePage === 'home' && (
                    <div className="page">
                        <div className="top-bar">
                            <h1>Привет, {user.name}! 👋</h1>
                            <div className="user-chip" onClick={() => setActivePage('profile')}>
                                <div className="avatar">{user.name.charAt(0)}</div>
                                <span>{user.name}</span>
                            </div>
                        </div>

                        {/* HERO-ВИДЖЕТ */}
                        <div className="hero-widget">
                            <div className="hero-content">
                                <h2>Твоя мастерская<br />в одном месте</h2>
                                <p>Управляй заказами, следи за материалами и создавай красоту — без хаоса.</p>
                                <button className="hero-btn" onClick={() => setActivePage('orders')}>Мои заказы →</button>
                            </div>
                            <svg className="hero-illustration" viewBox="0 0 400 220">
                                <circle cx="80" cy="50" r="25" fill="#FCAFC1" opacity="0.6" />
                                <circle cx="110" cy="45" r="30" fill="#FCAFC1" opacity="0.6" />
                                <circle cx="140" cy="55" r="22" fill="#FCAFC1" opacity="0.6" />
                                <circle cx="300" cy="40" r="18" fill="#FDE4EB" opacity="0.7" />
                                <circle cx="320" cy="35" r="22" fill="#FDE4EB" opacity="0.7" />
                                <ellipse cx="200" cy="210" rx="200" ry="30" fill="#89B8BF" opacity="0.3" />
                                <rect x="150" y="120" width="100" height="80" fill="#FFFFFF" rx="4" />
                                <polygon points="140,120 200,70 260,120" fill="#FCAFC1" />
                                <rect x="180" y="150" width="25" height="50" fill="#3D7584" />
                                <rect x="215" y="140" width="20" height="20" fill="#89B8BF" />
                                <circle cx="225" cy="150" r="3" fill="#FFFFFF" />
                                <rect x="230" y="85" width="12" height="25" fill="#3D7584" />
                                <circle cx="236" cy="75" r="8" fill="#FDE4EB" opacity="0.8" />
                                <circle cx="240" cy="60" r="12" fill="#FDE4EB" opacity="0.6" />
                                <rect x="90" y="160" width="6" height="40" fill="#3D7584" />
                                <circle cx="93" cy="150" r="22" fill="#89B8BF" />
                                <circle cx="80" cy="155" r="18" fill="#3D7584" opacity="0.7" />
                                <circle cx="106" cy="155" r="18" fill="#3D7584" opacity="0.7" />
                                <rect x="290" y="165" width="5" height="35" fill="#3D7584" />
                                <circle cx="292" cy="155" r="20" fill="#FCAFC1" />
                                <circle cx="280" cy="160" r="16" fill="#FDE4EB" opacity="0.7" />
                                <circle cx="304" cy="160" r="16" fill="#FDE4EB" opacity="0.7" />
                                <circle cx="130" cy="195" r="4" fill="#FCAFC1" />
                                <circle cx="270" cy="198" r="4" fill="#FDE4EB" />
                                <circle cx="250" cy="200" r="3" fill="#FCAFC1" />
                                <circle cx="340" cy="50" r="18" fill="#FCAFC1" opacity="0.8" />
                            </svg>
                        </div>

                        {/* СТАТИСТИКА */}
                        <div className="stats-grid">
                            <div className="stat-card">
                                <div className="stat-label">Активных заказов</div>
                                <div className="stat-value">4</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-label">Выручка за месяц</div>
                                <div className="stat-value teal">12 400 ₽</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-label">Материалов заканчивается</div>
                                <div className="stat-value pink">2</div>
                            </div>
                        </div>

                        {/* БЫСТРЫЕ ДЕЙСТВИЯ */}
                        <div className="section">
                            <h3>Быстрые действия</h3>
                            <div className="quick-actions">
                                <button className="action-btn teal" onClick={() => setShowOrderModal(true)}>+ Заказ</button>
                                <button className="action-btn pink" onClick={() => setShowMaterialModal(true)}>+ Материал</button>
                                <button className="action-btn teal" onClick={() => setActivePage('orders')}>📋 Заказы</button>
                                <button className="action-btn pink" onClick={() => setActivePage('materials')}>📦 Склад</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* СТРАНИЦА: ЗАКАЗЫ */}
                {activePage === 'orders' && (
                    <div className="page">
                        <div className="top-bar">
                            <h1>Мои заказы</h1>
                            <button className="btn-add" onClick={() => setShowOrderModal(true)}>+ Новый заказ</button>
                        </div>
                        <div className="kanban-board">
                            <div className="kanban-column">
                                <div className="column-header"><span>🆕 Новый</span><span className="count">2</span></div>
                                <div className="card"><div className="card-name">Мария К.</div><div className="card-city">📍 Москва</div><div className="card-items">Свеча «Лаванда» × 2</div><div className="card-footer"><span className="price">1 000 ₽</span><span className="date">до 10 ноя</span></div><span className="tag wait">⏳ Ждёт оплаты</span></div>
                                <div className="card"><div className="card-name">Ольга С.</div><div className="card-city">📍 СПб</div><div className="card-items">Мыло «Цитрус» × 3</div><div className="card-footer"><span className="price">1 500 ₽</span><span className="date">до 12 ноя</span></div><span className="tag paid">✓ Оплачено</span></div>
                            </div>
                            <div className="kanban-column">
                                <div className="column-header"><span>В работе</span><span className="count">1</span></div>
                                <div className="card"><div className="card-name">Екатерина В.</div><div className="card-city">📍 Казань</div><div className="card-items">Ваза (кастом)</div><div className="card-footer"><span className="price">3 200 ₽</span><span className="date">до 15 ноя</span></div><span className="tag paid">✓ Оплачено</span></div>
                            </div>
                            <div className="kanban-column">
                                <div className="column-header"><span>Отправлено</span><span className="count">1</span></div>
                                <div className="card"><div className="card-name">Дарья Л.</div><div className="card-city">📍 Екатеринбург</div><div className="card-items">Плед × 1</div><div className="card-footer"><span className="price">5 400 ₽</span><span className="date">02 ноя</span></div><span className="tag paid">✓ Трек: RU123</span></div>
                            </div>
                            <div className="kanban-column">
                                <div className="column-header"><span>Готово</span><span className="count">1</span></div>
                                <div className="card"><div className="card-name">Светлана М.</div><div className="card-city">📍 Новосибирск</div><div className="card-items">Свеча «Ваниль» × 4</div><div className="card-footer"><span className="price">2 000 ₽</span><span className="date">28 окт</span></div><span className="tag paid">✓ Закрыт</span></div>
                            </div>
                        </div>
                    </div>
                )}

                {/* СТРАНИЦА: МАТЕРИАЛЫ */}
                {activePage === 'materials' && (
                    <div className="page">
                        <div className="top-bar">
                            <h1>Материалы и склад</h1>
                            <button className="btn-add" onClick={() => setShowMaterialModal(true)}>+ Добавить материал</button>
                        </div>

                        <div className="section">
                            <h3>⚠️ Требуют внимания</h3>
                            <div className="materials-grid">
                                <div className="material-card low">
                                    <div className="mat-header"><div className="mat-icon">🕯️</div><span className="status low">Заканчивается</span></div>
                                    <div className="mat-name">Соевый воск</div>
                                    <div className="mat-qty">Осталось: 200 г из 1000 г</div>
                                    <div className="progress-bar"><div className="fill low" style={{ width: '20%' }}></div></div>
                                </div>
                                <div className="material-card out">
                                    <div className="mat-header"><div className="mat-icon">🌸</div><span className="status out">Закончилось</span></div>
                                    <div className="mat-name">Отдушка «Лаванда»</div>
                                    <div className="mat-qty">Осталось: 0 мл из 100 мл</div>
                                    <div className="progress-bar"><div className="fill out" style={{ width: '0%' }}></div></div>
                                </div>
                            </div>
                        </div>

                        <div className="section">
                            <h3>✅ В наличии</h3>
                            <div className="materials-grid">
                                <div className="material-card"><div className="mat-header"><div className="mat-icon">🧵</div><span className="status ok">Норма</span></div><div className="mat-name">Фитиль хлопковый</div><div className="mat-qty">Осталось: 45 м из 50 м</div><div className="progress-bar"><div className="fill" style={{ width: '90%' }}></div></div></div>
                                <div className="material-card"><div className="mat-header"><div className="mat-icon">🎨</div><span className="status ok">Норма</span></div><div className="mat-name">Краситель розовый</div><div className="mat-qty">Осталось: 80 мл из 100 мл</div><div className="progress-bar"><div className="fill" style={{ width: '80%' }}></div></div></div>
                                <div className="material-card"><div className="mat-header"><div className="mat-icon">📦</div><span className="status ok">Норма</span></div><div className="mat-name">Крафт-упаковка</div><div className="mat-qty">Осталось: 30 шт из 50 шт</div><div className="progress-bar"><div className="fill" style={{ width: '60%' }}></div></div></div>
                            </div>
                        </div>
                    </div>
                )}

                {/* СТРАНИЦА: ПРОФИЛЬ */}
                {activePage === 'profile' && (
                    <div className="page">
                        <div className="top-bar"><h1>Мой профиль</h1></div>
                        <div className="profile-card">
                            <div className="profile-header">
                                <div className="profile-avatar">{user.name.charAt(0)}</div>
                                <div className="profile-info">
                                    <h2>{user.name}</h2>
                                    <p>{user.email}</p>
                                    <div className="plan-badge">
                                        <span>{user.plan} • 7 дней бесплатно</span>
                                        <button className="change-plan-btn" onClick={handleChangePlan}>Изменить</button>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-form">
                                <div className="field"><label>Имя / Название мастерской</label><input type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} /></div>
                                <div className="field"><label>Email</label><input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} /></div>
                                <div className="field"><label>Ниша</label><input type="text" value={user.niche} onChange={(e) => setUser({ ...user, niche: e.target.value })} /></div>
                                <div className="field"><label>О себе</label><textarea rows="3" defaultValue="Создаю свечи из соевого воска с натуральными отдушками."></textarea></div>
                                <button className="btn-main" onClick={handleSaveProfile}>💾 Сохранить изменения</button>
                                <button className="btn-main outline" onClick={handleLogout}>🚪 Выйти из аккаунта</button>
                            </div>
                        </div>
                    </div>
                )}

            </main>

            {/* МОДАЛКИ (Простые заглушки для демонстрации) */}
            {showOrderModal && (
                <div className="modal-overlay" onClick={() => setShowOrderModal(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h2>Новый заказ</h2>
                        <div className="modal-field"><label>Имя клиента</label><input type="text" placeholder="Мария К." /></div>
                        <div className="modal-field"><label>Состав заказа</label><textarea rows="3"></textarea></div>
                        <div className="modal-actions">
                            <button className="btn-secondary" onClick={() => setShowOrderModal(false)}>Отмена</button>
                            <button className="btn-main" onClick={() => setShowOrderModal(false)}>Создать</button>
                        </div>
                    </div>
                </div>
            )}

            {showMaterialModal && (
                <div className="modal-overlay" onClick={() => setShowMaterialModal(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h2>Добавить материал</h2>
                        <div className="modal-field"><label>Название</label><input type="text" placeholder="Соевый воск" /></div>
                        <div className="modal-field"><label>Количество</label><input type="number" placeholder="1000" /></div>
                        <div className="modal-actions">
                            <button className="btn-secondary" onClick={() => setShowMaterialModal(false)}>Отмена</button>
                            <button className="btn-main" onClick={() => setShowMaterialModal(false)}>Добавить</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Dashboard;