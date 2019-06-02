const user = (userName, userAge) => {
    let name = userName;
    let age = userAge;

    function showName() {
        console.log(`Cześć ${name}, ${ age >= 18? 'możesz prowadzić samochód' : 'nie możesz jeszcze prowadzić samochodu'}`)
    }
    return showName;

}

const ania = user("Paweł", 17);
ania();