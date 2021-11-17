import './pageContent.css'
import Clause from '../clause/Clause'
import UserCard from '../authorCard/AuthorCard'
const text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const PageContent = () => {
    return (
        <div id="pageContentWrapper">
            <div id="columnArticle">
                <h1>TITLE</h1>
                <h2>SUBTITLE</h2>
                <div>
                    {text}{text}{text}
                </div>
                <h1>TITLE</h1>
                <h2>SUBTITLE</h2>
                <div>
                    {text}{text}{text}
                </div>
                <h1>TITLE</h1>
                <h2>SUBTITLE</h2>
                <div>
                    {text}{text}{text}
                </div>
                <h1>TITLE</h1>
                <h2>SUBTITLE</h2>
                <div>
                    {text}{text}{text}
                </div>
            </div>
      <Clause />
            <div id="columnUser">
                <UserCard />
            </div>
        </div>
    )
}

export default PageContent