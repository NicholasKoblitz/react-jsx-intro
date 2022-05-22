const App = () => (
    <div>
        <FirstComponent />
        <NamedCompnent name="Mike" />
    </div>
)

ReactDOM.render(<App/>, document.getElementById("root"));
// const root = createRoot(document.getElementById("root"));
// root.render(<App/>)