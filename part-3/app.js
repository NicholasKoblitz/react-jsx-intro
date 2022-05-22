const App = () => (
    <div>
        <Person name="name1" age={16} hobbies={["Swimming", "Dancing"]}/>
        <Person name="SuperLongName" age={20} hobbies={["Walking", "Guitar"]} />
        <Person name="Name2" age={18} hobbies={["Singing", "Coding"]}/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById('root'));