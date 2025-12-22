
    document.addEventListener('DOMContentLoaded', () => {
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');

            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // 1. Close all open FAQ items
                faqItems.forEach(innerItem => {
                    innerItem.classList.remove('active');
                });

                // 2. If the clicked item was NOT active, open it
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    });
