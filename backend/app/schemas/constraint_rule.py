from pydantic import BaseModel


class ConstraintRuleCreate(
    BaseModel
):
    name: str

    rule_data: dict


class ConstraintRuleResponse(
    BaseModel
):
    id: int

    name: str

    rule_data: dict

    is_active: bool

    class Config:
        from_attributes = True