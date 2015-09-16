from rest_framework import status
from rest_framework.test import APITestCase
from food.factories import FoodFactory, ComponentFactory
import json


class FoodAPITests(APITestCase):
    def test_get_foods_list(self):
        self.component = ComponentFactory()
        self.food = FoodFactory(components=[self.component])

        response = self.client.get("/api/foods/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        food = json.loads(response.content)["results"][0]

        self.assertDictContainsSubset({
            "id": self.food.id,
            "name": self.food.name,
            "food_type": self.food.food_type,
        }, food)

        self.assertItemsEqual(food["components"], [{
            u"code": unicode(self.component.code),
            u"value": unicode(self.component.value)
        }])

    def test_filter_foods_by_name(self):
        self.food1 = FoodFactory(name="foobar")
        self.food2 = FoodFactory(name="sugar")
        self.food3 = FoodFactory(name="asd")
        self.food4 = FoodFactory(name="better sugar")

        response = self.client.get("/api/foods/?search=sugar")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        foods = json.loads(response.content)["results"]

        self.assertEqual(len(foods), 2)
