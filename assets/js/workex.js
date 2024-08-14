<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Smooth scroll functionality
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Animate heading
        const heading = document.querySelector('.heading');
        heading.style.opacity = 0;
        heading.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            heading.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            heading.style.opacity = 1;
            heading.style.transform = 'translateY(0)';
        }, 100);
    });
</script>