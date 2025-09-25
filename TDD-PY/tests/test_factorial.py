import pytest
from factorial import factorial

def test_factor_zero():
    assert factorial(0) == 1

def test_factor_one():
    assert factorial(1) == 1

def test_factor_five():
    assert factorial(5) == 120

def test_factor_negative():
    with pytest.raises(ValueError):
        factorial(-1)

def test_factor_ten():
    assert factorial(10) == 3628800