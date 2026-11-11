import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthScreen.css';

const AuthScreen = () => {
    const [activeTab, setActiveTab] = useState('register');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleContinue = () => {
        // Пока просто переходим на следующий экран
        navigate('/plans');
    };

    return (
        <div className="auth-screen">
            <div className="auth-card">
                <div className="auth-logo">🌸</div>
                <div className="auth-title">HandmadeOS</div>
                <div className="auth-subtitle">Твоя мастерская в одном месте</div>

                <div className="auth-tabs">
                    <div className={`auth-tab ${activeTab === 'register' ? 'active' : ''}`} onClick={() => setActiveTab('register')}>Регистрация</div>
                    <div className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`} onClick={() => setActiveTab('login')}>Вход</div>
                </div>

                {activeTab === 'register' && (
                    <div className="auth-form">
                        <div className="auth-field">
                            <label>Как тебя зовут?</label>
                            <input type="text" placeholder="Анна" />
                        </div>
                        <div className="auth-field">
                            <label>Email</label>
                            <input type="email" placeholder="anna@example.com" />
                        </div>
                        <div className="auth-field">
                            <label>Пароль</label>
                            <div className="password-wrapper">
                                <input type={showPassword ? 'text' : 'password'} placeholder="Минимум 6 символов" />
                                <button type="button" className="eye-toggle" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? '🙈' : '👁️'}
                                </button>
                            </div>
                        </div>
                        <button className="btn-main" onClick={handleContinue}>Создать аккаунт →</button>
                    </div>
                )}

                {activeTab === 'login' && (
                    <div className="auth-form">
                        <div className="auth-field">
                            <label>Email</label>
                            <input type="email" placeholder="anna@example.com" />
                        </div>
                        <div className="auth-field">
                            <label>Пароль</label>
                            <div className="password-wrapper">
                                <input type={showPassword ? 'text' : 'password'} placeholder="Введи пароль" />
                                <button type="button" className="eye-toggle" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? '🙈' : '👁️'}
                                </button>
                            </div>
                        </div>
                        <button className="btn-main" onClick={handleContinue}>Войти →</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthScreen;