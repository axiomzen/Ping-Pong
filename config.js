module.exports = {
  development: {
    clientUrl: undefined,
    clientPort: 8080,
    wsPort: 9090,
    cardReaderPort: undefined,    // TODO: Refactor this, we're not using
    database: {
      client: 'sqlite3',
      connection: {
        filename: './mydb.sqlite'
      },
      migrations: {
        directory: __dirname + '/migrations',
        tableName: 'migrations'
      }
    }
  },
  global: {
    sparkCore: {
      accessToken: '0a4512d533829e87423e23d79d0bb7298f6347b7',
      id: '53ff70066667574853402067'
    },
    // How many points before service switches
    serverSwitchLimit: 5,
    // When both players have reached this threshold, the server switches every time
    serverSwitchThreshold: 20,
    maxScore: 21,
    mustWinBy: 2,
    minPlayers: 2,
    maxPlayers: 2,
    // The duration to show the winning view for before returning to the leaderboard
    winningViewDuration: 12000,
    feelers: {
      pingInterval: 5000,
      pingThreshold: 250,
      undoThreshold: 1500
    },
    cardReader: {
      pingInterval: 30000,
      pingThreshold: 250
    }
  }
};
