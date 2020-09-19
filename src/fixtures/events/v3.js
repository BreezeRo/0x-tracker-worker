const V3_EVENT = {
  _id: '5bb1f06b62f9ca0004c7cf20',
  blockNumber: 6286241,
  data: {
    address: '0x4f833a24e1f95d70f028921e27040ca56e09ab0b',
    blockHash:
      '0x592bdb8653f20b291b3cf927314344f299c6e37a3a2887a558b29584d60730d6',
    blockNumber: 6286241,
    data:
      '0x0000000000000000000000007447dab10325f902725191a34eb8288abe02c7f4000000000000000000000000d3d0474124c1013ed6bfcfd9a49cfedb8c78fc4400000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000005dcd047d4f40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001600000000000000000000000000000000000000000000000000000000000000024f47261b0000000000000000000000000e41d2489571d322189246dafa5ebde1f4699f498000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024f47261b0000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000000000000000000000000000000000000',
    logIndex: 42,
    removed: false,
    topics: [
      '0x0bcc4c97732e47d9946f229edb95f5b6323f601300e4690de719993f3c371129',
      '0x000000000000000000000000d3d0474124c1013ed6bfcfd9a49cfedb8c78fc44',
      '0x000000000000000000000000173a2467cece1f752eb8416e337d0f0b58cad795',
      '0x8739c67a2a559205a7c8c7b24713ec21f35fed8b565a225a998375b1dae1bb14',
    ],
    transactionHash:
      '0x28ffb48f354997d384eee49d326c13a10c4584ca3bced4632053b201d3a0cbbc',
    transactionIndex: 67,
    event: 'Fill',
    args: {
      makerAddress: '0xd3d0474124c1013ed6bfcfd9a49cfedb8c78fc44',
      feeRecipientAddress: '0x173a2467cece1f752eb8416e337d0f0b58cad795',
      takerAddress: '0x7447dab10325f902725191a34eb8288abe02c7f4',
      senderAddress: '0xe33c8e3a0d14a81f0dd7e174830089e82f65fc85',
      makerAssetFilledAmount: 1,
      takerAssetFilledAmount: 1650162000000000,
      makerFeePaid: 500000000000,
      takerFeePaid: 300000000,
      orderHash:
        '0x8739c67a2a559205a7c8c7b24713ec21f35fed8b565a225a998375b1dae1bb14',
      makerAssetData:
        '0xf47261b0000000000000000000000000e41d2489571d322189246dafa5ebde1f4699f498',
      takerAssetData:
        '0xf47261b0000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      protocolFeePaid: 100000000000,
      makerFeeAssetData:
        '0xf47261b0000000000000000000000000e41d2489571d322189246dafa5ebde1f4699f498',
      takerFeeAssetData:
        '0xf47261b0000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    },
  },
  logIndex: 42,
  protocolVersion: 3,
  transactionHash:
    '0x28ffb48f354997d384eee49d326c13a10c4584ca3bced4632053b201d3a0cbbc',
  type: 'Fill',
  fillCreated: true,
};

module.exports = V3_EVENT;
