import { useNavigate } from 'react-router-dom';
import './PlansScreen.css';

const PlansScreen = () => {
    const navigate = useNavigate();

    const handleSelect = (plan) => {
        // Сохранение выбранного плана
        localStorage.setItem('hmo_plan', plan);
        navigate('/dashboard');
    };

    return (
        <div className="plans-screen">
            <div className="plans-header">
                <h1>Выбери свой план 🌿</h1>
                <p>Начни бесплатно или попробуй Pro 7 дней без оплаты</p>
            </div>

            <div className="plans-grid">
                {/* FREE */}
                <div className="plan-card">
                    <div className="plan-name">Free</div>
                    <div className="plan-price">0 ₽<span>/мес</span></div>
                    <div className="plan-trial">Навсегда бесплатно</div>
                    <ul className="plan-features">
                        <li>До 10 заказов в месяц</li>
                        <li>Базовый учёт материалов</li>
                        <li>1 пользователь</li>
                        <li className="disabled">Красивые счета</li>
                        <li className="disabled">Аналитика</li>
                    </ul>
                    <button className="btn-plan" onClick={() => handleSelect('Free')}>
                        Выбрать Free
                    </button>
                </div>

                {/* STARTER */}
                <div className="plan-card featured">
                    <div className="plan-badge">⭐ ПОПУЛЯРНО</div>
                    <div className="plan-name">Starter</div>
                    <div className="plan-price">299 ₽<span>/мес</span></div>
                    <div className="plan-trial">🎁 7 дней бесплатно</div>
                    <ul className="plan-features">
                        <li>Безлимит заказов</li>
                        <li>Учёт материалов + уведомления</li>
                        <li>Красивые счета PDF</li>
                        <li>До 3 пользователей</li>
                        <li className="disabled">Продвинутая аналитика</li>
                    </ul>
                    <button className="btn-plan" onClick={() => handleSelect('Starter')}>
                        Попробовать 7 дней
                    </button>
                </div>

                {/* PRO */}
                <div className="plan-card">
                    <div className="plan-name">Pro</div>
                    <div className="plan-price">599 ₽<span>/мес</span></div>
                    <div className="plan-trial">🎁 7 дней бесплатно</div>
                    <ul className="plan-features">
                        <li>Всё из Starter</li>
                        <li>Продвинутая аналитика</li>
                        <li>Интеграция с доставкой</li>
                        <li>Безлимит пользователей</li>
                        <li>Приоритетная поддержка</li>
                    </ul>
                    <button className="btn-plan" onClick={() => handleSelect('Pro')}>
                        Попробовать 7 дней
                    </button>
                </div>
            </div>

            <div className="plans-skip">
                <a onClick={() => handleSelect('Free')}>Пропустить и использовать Free →</a>
            </div>
        </div>
    );
};

export default PlansScreen;