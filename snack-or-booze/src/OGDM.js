function DrinkMenu({ drinks }) {
    return (
        <section className="col-md-4">
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                        Drink Menu
                    </CardTitle>
                    <CardText>
                        Thirsty? Today's drink menu has an option for everyone.
                    </CardText>
                    <ListGroup>
                        {drinks.map(drink => (
                            <Link to={`/drinks/${drink.id}`} key={drink.id}>
                                <ListGroupItem>{drink.name}</ListGroupItem>
                             </Link>
                        ))}
                    </ListGroup>
                </CardBody>
            </Card>
        </section>
    );
}

export default DrinkMenu;