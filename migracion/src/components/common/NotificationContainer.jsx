import React from 'react';

const NotificationContainer = ({ notifications, onRemove }) => {
    const getIconClass = (type) => {
        switch (type) {
            case 'success':
                return 'fa-check-circle text-success';
            case 'warning':
                return 'fa-exclamation-triangle text-warning';
            case 'error':
                return 'fa-times-circle text-danger';
            default:
                return 'fa-info-circle text-info';
        }
    };

    const getAlertClass = (type) => {
        switch (type) {
            case 'success':
                return 'alert-success';
            case 'warning':
                return 'alert-warning';
            case 'error':
                return 'alert-danger';
            default:
                return 'alert-info';
        }
    };

    return (
        <div className="notification-container position-fixed" style={{ top: '20px', right: '20px', zIndex: 9999 }}>
            {notifications.map(notification => (
                <div
                    key={notification.id}
                    className={`alert ${getAlertClass(notification.type)} alert-dismissible fade show mb-2`}
                    style={{ minWidth: '300px', maxWidth: '400px' }}
                >
                    <i className={`fas ${getIconClass(notification.type)} me-2`}></i>
                    {notification.message}
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => onRemove(notification.id)}
                        aria-label="Close"
                    ></button>
                </div>
            ))}
        </div>
    );
};

export default NotificationContainer;
