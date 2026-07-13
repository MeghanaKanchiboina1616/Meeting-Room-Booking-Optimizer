from backend.app.models.constraint_rule import (
    ConstraintRule,
)


def apply_rules(
    solver,
    rules,
):
    for rule in rules:

        data = rule.rule_data

        rule_type = data.get(
            "type"
        )

        if (
            rule_type
            == "weekend_block"
        ):
            print(
                "Weekend blocked"
            )

        elif (
            rule_type
            == "working_hours"
        ):
            print(
                data
            )

        elif (
            rule_type
            == "capacity_limit"
        ):
            print(
                data
            )