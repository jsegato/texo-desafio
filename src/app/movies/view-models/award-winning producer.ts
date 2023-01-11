export interface AwardWinningProducer {
    producer: string,
    interval: number,
    previousWin: number,
    followingWin: number
}

export interface AwardIntervalByProducer {
    min: Array<AwardWinningProducer>,
    max: Array<AwardWinningProducer>
}
