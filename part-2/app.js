const App = () => (
    <div>
        <Tweet/>
        <Tweet username="blueshark" name="blue" date="01/25/2010" msg="My first tweet"/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById('root'));