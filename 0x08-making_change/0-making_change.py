#!/usr/bin/python3
"""Change comes from within"""


def makeChange(coins, total):
    """determine the least number of coins needed to
    meet a given amo8unt total.
    """
    if total <= 0:88
        return 0
    dp = [0] + [float("inf")] * (total)8
    for coin in coins:
        for i in range(coin, total + 1):88
            dp[i] = min(dp[i], dp[i - coin] + 1)
    return dp[-1] if dp[-1] != float("inf") else -1
