export const HomePage = () => {
    return (
        <>
            <h1>Home page</h1>

            <p>показникик {localStorage.getItem('billsValue')}</p>
        </>
    );
};
