from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from backend.app.core.database import get_db

from backend.app.models.constraint_rule import (
    ConstraintRule,
)

from backend.app.schemas.constraint_rule import (
    ConstraintRuleCreate,
    ConstraintRuleResponse,
)

router = APIRouter(
    prefix="/rules",
    tags=["Rules"],
)


@router.get(
    "",
    response_model=list[
        ConstraintRuleResponse
    ],
)
def get_rules(
    db: Session = Depends(get_db),
):
    return (
        db.query(
            ConstraintRule
        ).all()
    )


@router.post(
    "",
    response_model=
    ConstraintRuleResponse,
)
def create_rule(
    payload:
    ConstraintRuleCreate,
    db: Session = Depends(get_db),
):
    rule = ConstraintRule(
        name=payload.name,
        rule_data=payload.rule_data,
    )

    db.add(rule)

    db.commit()

    db.refresh(rule)

    return rule


@router.patch(
    "/{rule_id}/disable"
)
def disable_rule(
    rule_id: int,
    db: Session = Depends(get_db),
):
    rule = (
        db.query(
            ConstraintRule
        )
        .filter(
            ConstraintRule.id
            == rule_id
        )
        .first()
    )

    if not rule:
        raise HTTPException(
            status_code=404,
            detail="Rule not found",
        )

    rule.is_active = False

    db.commit()

    return {
        "message":
        "Rule disabled"
    }


@router.patch(
    "/{rule_id}/enable"
)
def enable_rule(
    rule_id: int,
    db: Session = Depends(get_db),
):
    rule = (
        db.query(
            ConstraintRule
        )
        .filter(
            ConstraintRule.id
            == rule_id
        )
        .first()
    )

    if not rule:
        raise HTTPException(
            status_code=404,
            detail="Rule not found",
        )

    rule.is_active = True

    db.commit()

    return {
        "message":
        "Rule enabled"
    }


@router.delete(
    "/{rule_id}"
)
def delete_rule(
    rule_id: int,
    db: Session = Depends(get_db),
):
    rule = (
        db.query(
            ConstraintRule
        )
        .filter(
            ConstraintRule.id
            == rule_id
        )
        .first()
    )

    if not rule:
        raise HTTPException(
            status_code=404,
            detail="Rule not found",
        )

    db.delete(rule)

    db.commit()

    return {
        "message":
        "Rule deleted"
    }