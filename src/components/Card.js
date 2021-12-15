import React from "react";

import { Card, Button } from "react-bootstrap";

export default function CardComponent() {
  return (
    <Card bg="success" text="dark">
      <Card.Body>
        <Card.Title>This is a Card Title</Card.Title>
        <Card.Text>
          <p>
            Esse nulla nostrud tempor sint mollit consequat quis consequat
            dolore eiusmod aute voluptate. Ullamco veniam duis duis proident
            culpa. Eiusmod ea et minim consectetur aute. Est cupidatat excepteur
            ex adipisicing irure labore ex duis enim ex do. Aliqua eiusmod ea ex
            consectetur sint irure officia sint amet. Amet culpa excepteur ad
            aliqua amet aliquip ut culpa veniam eu veniam non.
          </p>
        </Card.Text>
        <Button variant="success">Go Somewhere</Button>
      </Card.Body>
    </Card>
  );
}
