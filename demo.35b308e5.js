const a=`
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <div class="navbar-icons">

            <a href="/" aria-label="Home" class="header-jb">
                JB
            </a>

            <a href="resume.html" aria-label="Resume">
                <i class='far fa-file-alt'></i>
            </a>

            <a href="projects.html" aria-label="Projects">
                <i class='far fa-lightbulb'></i>
            </a>

            <a href="demo.html" aria-label="Demos">
                <i class="far fa-file-code"></i>
            </a>

            <a href="https://github.com/jlbeard84" aria-label="Github">
                <i class="fab fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/joshua-beard-3087ab31/" aria-label="LinkedIn">
                <i class="fab fa-linkedin"></i>
            </a>
            </div>
        </div>
    </nav>
`;class e extends HTMLElement{connectedCallback(){this.render()}render(){this.innerHTML=a}}customElements.define("header-component",e);
//# sourceMappingURL=demo.35b308e5.js.map
