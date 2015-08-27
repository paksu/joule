import factory
import factory.fuzzy as fuzzy
from . import models


class FoodFactory(factory.DjangoModelFactory):
    class Meta:
        model = models.Food

    name = fuzzy.FuzzyText(length=10, prefix="food_")
    food_type = fuzzy.FuzzyChoice(["food", "dish"])

    @factory.post_generation
    def components(self, create, extracted, **kwargs):
        if not create:
            # Simple build, do nothing.
            return

        if extracted:
            # A list of components were passed in, use them
            for component in extracted:
                self.components.add(component)


class ComponentFactory(factory.DjangoModelFactory):
    class Meta:
        model = models.Component

    code = fuzzy.FuzzyText(length=5)
    value = fuzzy.FuzzyDecimal(0.5, 50.0)
