import React from 'react';

function Header() {
    return (
<header>
    <nav>
        <ul>
            <li><a href="#about"><i class="fas fa-user"></i> About</a></li>
            <li><a href="#portfolio"><i class="fas fa-briefcase"></i> Portfolio</a></li>
            <li><a href="#contact"><i class="fas fa-envelope"></i> Contact</a></li>
        </ul>
    </nav>
</header>
    );
}

export default Header;