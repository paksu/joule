from rest_framework import status
from rest_framework.test import APITestCase
from food.factories import FoodFactory, ComponentFactory
import json


class FoodAPITests(APITestCase):
    def setUp(self):
        self.component = ComponentFactory()
        self.food = FoodFactory(components=[self.component])

    def test_get_foods_list(self):
        response = self.client.get("/api/foods/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        food = json.loads(response.content)[0]

        self.assertDictContainsSubset({
            "id": self.food.id,
            "name": self.food.name,
            "food_type": self.food.food_type,
        }, food)

        self.assertItemsEqual(food["components"], [{
            u"code": unicode(self.component.code),
            u"value": unicode(self.component.value)
        }])
