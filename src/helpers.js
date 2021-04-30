import moment from "moment"

const ICOSA_EPOCH = 1609459200000n

export function GetSnowflakeTimestamp(snowflake) {
    const timestamp = GetSowflakeTimestampRaw(snowflake)
    return moment.unix(Number(timestamp / 1000n))
}

export function GetSowflakeTimestampRaw(snowflake) {
    const number = BigInt(String(snowflake))
    return (number >> 22n) + ICOSA_EPOCH
}