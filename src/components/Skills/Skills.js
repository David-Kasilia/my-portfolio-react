import React from 'react';
// import {
//   FaHtml5, FaCss3Alt, FaJsSquare, FaReact,
//   FaBootstrap, FaSketch, FaFigma, FaGitAlt, FaLinux, FaWindows,
// } from 'react-icons/fa';
// import {
//   SiRedux, SiRubyonrails, SiPostgresql, SiBlender, SiFirebase, SiHeroku, SiJest, SiPostman,
// } from 'react-icons/si';

const Skills = () => (
  <div className="container-fluid skills-page">
    <div className="card skills-card">
      <div className="card-header text-white fw-bold fs-3 ms-3">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABmklEQVR4nO2XzUrDQBDHBw8+guLNsxc9mVX0CdzgybuP4Bv0skvrMxQzUB/Ak0c9NFRQFMEiehI8+FF3xEeITJqtsU1DQ9OkUgcWsrMf88v8dxcGVmBv3gF5KEC+CnCDIpoD8kWArHFs4I+iAg82WYMujRtswO4mFGQOyC2bCbA0ULD14oqcAByQLQGuP2o/dwABri/AbWbo5wuQ1aYPQJTUoGSAZmkSDGoxawCOfRfEtNwC+IsAlUow52m6RW38iQLU9fsiarpBbVpx/1G1s4qaAk+bJ+vzlLngubwmF4A6B1fmPgyk6Do+hooOIgDs+UJQCnhNGsRIAI3K2wIq046CPxyrj6X4uKfopBuM9n+t0eYu9Gt67F+TCQB//qbNGw/orwyF49Wv5WHgvMdEAFB11rqZMc9pmRsLoJEiQZL+/RIkyZYJoP8QoqKrNP3ZeE5uh9Aab8Q3ADWdWR9q85mkv6fonOfmdg2HmafNJSo6hZl+isexfwBhM+9EpRmXS1CQrcPOdqw0kyUWp24VuERmCJuJIlq8PP8GdW2/1+09a7AAAAAASUVORK5CYII=" alt="frontend skill icon" className="front-icon" />
        <span className="ms-3">
          Frontend
        </span>
      </div>
      <ul className="skills-list fw-semi-bold fs-6 mt-4">
        <li className="icon">
          <img src="https://img.icons8.com/color/256/html-5.png" alt="HTML5 ICON" className="skills-icons" />
          <br />
          <span className="mt-1">
            HTML5
          </span>
        </li>
        <li className="icon">
          <img src="https://img.icons8.com/stickers/256/css3.png" alt="css icon" className="skills-icons" />
          <br />
          <span className="mt-1 ms-2">
            CSS3
          </span>
        </li>
        <li className="icon">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVUlEQVR4nGNgGAWjYBSMgkEJvt+X+z+YMMOoB+6PxsD/0SREChjoJPN9NBPfH/hQ/z5ajN4f+JD/PlqR3R8cmIFUMNAO/j7qgfsDH+rfR5PQfUpCjBGOl04VQZE7s1Pyf6gv939xUZb/LMyM/yXFWf5HBvD8P7tTcvB7YPtSsf8c7Ewo8gxQzMXJBJYftB74elfuv4IsK1ycnY3pv4YKG5iGiZkasP//dm+QeuDkNgm4GBMT4//TOyBJ5tZRqf9K8qz/cxL5/r++Kjt4Y2DXCnG4GCgZfbyFcOy769gdPqg8cPuYNIq4rxvX/5tHpIg0bxB4AIRd7ThR5DjYmf4nhvP+v7xfamh44N4J6f/62uwYJRAzMyPYI28Gcx6AYZAjy7L5//NwYRanOups/59fkBncHoDhp+dk/jeXCfwXE2FBUZ8VzzewHgCV9/g8gF7Ov7gkAy7/YeplJFno5wFQKeLjwvV/3VxRuNjVA1IoHliLJDe3T/i/kS47RnnfXSsIV8/GykQfDyyeLAKu/mGlSU4S3/+JzUL/LU04UDwAavuA1IPaPzAxe0vO/3eOS4PFn1+U+W9rjtADqq3p4oFL+6TgHsCFVRRY4Ummpx4RyiDMyMj4X0qCBaUpAcKlWfz0S0I7l4v95+Nhxup4UFLYugTROAN5pCJHAK+Hbcw4sBalNPMACD84Jf0/O4Hvv6wUK7g8BzWTAz25/x/fLIFV/aH1Ev/D/Xn+qylBGnIC/Mxgh09pE/r/+TauUo2GHqAHZhj1wP3RGPhP1yQ0CkbBKBgFDPQAANX6rlnxM/hBAAAAAElFTkSuQmCC" alt="javascript icon" className="skills-icons" />
          <br />
          <span className="mt-1">
            JavaScript
          </span>
        </li>
        <li className="icon">
          <img src="https://img.icons8.com/ultraviolet/256/react.png" alt="react icon" className="skills-icons" />
          <br />
          <span className="mt-1 ms-1">
            React
          </span>
        </li>
        <li className="icon">
          <img src="https://img.icons8.com/color/256/redux.png" alt="react icon" className="skills-icons" />
          <br />
          <span className="ms-1 mt-1">
            Redux
          </span>
        </li>
        <li className="icon">
          <img src="https://img.icons8.com/color/256/bootstrap.png" alt="react icon" className="skills-icons" />
          <br />
          <span className="ms-1 mt-1">
            Bootstrap
          </span>
        </li>
      </ul>
      <div className="card-header text-white fw-bold fs-3 ms-3">
        <img src="https://img.icons8.com/nolan/256/backend-development.png" alt="react icon" className="skills-icons" />
        <span className="ms-3">
          Backend
        </span>
      </div>
      <ul className="skills-list fw-semi-bold fs-6 mt-4">
        <li className="icon">
          <img src="https://img.icons8.com/arcade/256/ruby-programming-language.png" alt="react icon" className="skills-icons" />
          <br />
          <span className="ms-2 mt-1">
            Ruby
          </span>
        </li>
        <li className="icon">
          <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/256/external-rails-a-server-side-web-application-framework-written-in-ruby-logo-shadow-tal-revivo.png" alt="react icon" className="skills-icons" />
          <br />
          <span className="ms-1 mt-1">
            Ruby On Rails
          </span>
        </li>
        <li className="icon">
          <img src="https://img.icons8.com/color/256/postgreesql.png" alt="react icon" className="skills-icons" />
          <br />
          <span className="ms-1 mt-1">
            PostgreSQL
          </span>
        </li>
        <li className="icon">
          <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/256/external-sql-mobile-app-development-flaticons-lineal-color-flat-icons.png" alt="react icon" className="skills-icons" />
          <br />
          <span className="ms-2 mt-1">
            SQL
          </span>
        </li>
      </ul>
      <div className="card-header text-white fw-bold fs-3 ms-4">
        <img src="https://img.icons8.com/officel/256/android.png" alt="react icon" className="skills-icons" />
        <span className="ms-3">
          Android Development
        </span>
      </div>
      <ul className="skills-list fw-semi-bold fs-6 mt-4 ms-3">
        <li className="icon">
          <img src="https://img.icons8.com/color/256/kotlin.png" alt="react icon" className="skills-icons" />
          <br />
          <span className="ms-2">
            Kotlin
          </span>
        </li>
        <li className="icon">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Android_Studio_Icon_%282014-2019%29.svg/640px-Android_Studio_Icon_%282014-2019%29.svg.png" alt="react icon" className="skills-icons" />
          <br />
          <span className="ms-1 mt-1">
            Android Studio
          </span>
        </li>
        <li className="icon">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/512px-IntelliJ_IDEA_Icon.svg.png?20200803071016" alt="react icon" className="skills-icons" />
          <br />
          <span className="ms-1 mt-1">
            Intellij IDEA
          </span>
        </li>
      </ul>
      <div className="card-header text-white fw-bold fs-3">
        <img src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/256/external-tools-engineering-icongeek26-outline-gradient-icongeek26.png" alt="react icon" className="skills-icons ms-4" />
        <span className="ms-3">
          Tools
        </span>
        <span className="ms-3 me-3">
          &
        </span>
        <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/256/external-technologies-computer-science-flaticons-lineal-color-flat-icons.png" alt="react icon" className="skills-icons" />
        <span className="ms-3">
          Technologies
        </span>
      </div>
      <ul className="skills-list fw-semi-bold fs-6">
        <li className="icon ms-3">
          <img src="https://img.icons8.com/fluency/256/figma.png" alt="react icon" className="skills-icons" />
          <img src="https://img.icons8.com/color/256/linux--v1.png" alt="react icon" className="skills-icons" />
          <img src="https://img.icons8.com/color/256/git.png" alt="react icon" className="skills-icons" />
          <img src="https://img.icons8.com/bubbles/256/windows-10.png" alt="react icon" className="skills-icons" />
          <img src="https://img.icons8.com/bubbles/256/blender-3d.png" alt="react icon" className="skills-icons" />
          <img src="https://img.icons8.com/color/256/firebase.png" alt="react icon" className="skills-icons" />
          <img src="https://img.icons8.com/color/256/heroku.png" alt="react icon" className="skills-icons" />
          <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/256/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png" alt="react icon" className="skills-icons" />
          <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/256/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-color-tal-revivo.png" alt="react icon" className="skills-icons" />
          <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/256/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" alt="react icon" className="skills-icons" />
          <img src="https://img.icons8.com/color/256/powershell.png" alt="react icon" className="skills-icons" />
          <img src="https://img.icons8.com/color/256/visual-studio-code-2019.png" alt="react icon" className="skills-icons" />
          <img src="https://img.icons8.com/stickers/256/cmd.png" alt="react icon" className="skills-icons" />
          <img src="https://img.icons8.com/officel/256/api-settings.png" alt="react icon" className="skills-icons" />

        </li>
      </ul>
    </div>
  </div>
);

export default Skills;
