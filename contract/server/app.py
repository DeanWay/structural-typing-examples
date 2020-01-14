from fastapi import FastAPI
from pydantic import BaseModel
from typing import Union
from enum import Enum
from decimal import Decimal
from typing_extensions import Literal

class SharedAccountSettings(BaseModel):
    balance: Decimal

class USAccountSettings(SharedAccountSettings):
    country: Literal['US']
    state: Literal['NY', 'NJ', 'WA']
    ach_enabled: bool

class CanadaAccountSettings(SharedAccountSettings):
    country: Literal['CA']
    state: Literal['ON', 'QC', 'BC']
    visa_debit_enabled: bool

class AccountSettings(BaseModel):
    account: Union[USAccountSettings, CanadaAccountSettings]

app = FastAPI()
@app.post('/', response_model=AccountSettings)
def create_account_settings(account_settings: AccountSettings):
    return account_settings
