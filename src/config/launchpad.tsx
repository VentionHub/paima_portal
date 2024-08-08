export enum LaunchpadInformationHeadingType {
  HEADING2 = "heading2",
  HEADING3 = "heading3",
  HEADING4 = "heading4",
  HEADING5 = "heading5",
  HEADING6 = "heading6",
}

export enum LaunchpadInformationContentType {
  TEXT = "text",
  LIST = "list",
  GALLERY = "gallery",
}

export type LaunchpadInformationDataType = {
  sideImageURL?: string;
  body: (
    | {
        type: LaunchpadInformationHeadingType;
        content: string;
      }
    | {
        type: LaunchpadInformationContentType.TEXT;
        content: string;
      }
    | {
        type: LaunchpadInformationContentType.LIST;
        content: string[];
      }
    | {
        type: LaunchpadInformationContentType.GALLERY;
        imageURLs: string[];
      }
  )[][];
}[];

type LaunchpadDataType = {
  header?: LaunchpadInformationDataType;
  body: LaunchpadInformationDataType;
};

export const launchpadData: Record<string, LaunchpadDataType> = {
  "test-launchpad-1": {
    body: [
      {
        sideImageURL: "/images/tarochi-launchpad-overview.jpg",
        body: [
          [
            {
              type: LaunchpadInformationHeadingType.HEADING2,
              content: "What is Tarochi?",
            },
            {
              type: LaunchpadInformationContentType.TEXT,
              content:
                "Tarochi is an ambitious onchain RPG, where every quest, every challenge, and every monster caught becomes a part of the blockchain history. Journey through a vast, immersive land, interacting with NPCs, unlocking achievements, and unraveling quests.",
            },
            {
              type: LaunchpadInformationContentType.TEXT,
              content:
                "Dive into this revolutionary experience on the Xai network, made seamless by Arbitrum Orbit and the powerful Paima Engine. Best of all? Embark on this adventure without the hassle of bridging, and kickstart your legend for free!",
            },
          ],
        ],
      },
      {
        body: [
          [
            {
              type: LaunchpadInformationHeadingType.HEADING2,
              content: "Tarochi Tokenomics",
            },
            {
              type: LaunchpadInformationContentType.TEXT,
              content:
                "Tarochi comes with three primary components to its tokenomics model:",
            },
            {
              type: LaunchpadInformationContentType.LIST,
              content: [
                "**Tarochi Monsters:** tradeable as NFTs including limited-time monsters, supply-limited monsters and unlimited supply free-to-play monsters",
                "**Tarochi Gold:** an in-game currency earned through competing against other players globally",
                "**Paima ecosystem token:** a token that will power the Paima ecosystem across games (whitepaper pending)",
              ],
            },
            {
              type: LaunchpadInformationContentType.TEXT,
              content:
                "Dive into this revolutionary experience on the Xai network, made seamless by Arbitrum Orbit and the powerful Paima Engine. Best of all? Embark on this adventure without the hassle of bridging, and kickstart your legend for free!",
            },
          ],
          [
            {
              type: LaunchpadInformationHeadingType.HEADING3,
              content: "Tarochi Monsters",
            },
            {
              type: LaunchpadInformationContentType.TEXT,
              content:
                "Every wild area in Tarochi contains monsters that you can battle for experience points or to capture. Monsters come in a variety of rarity:",
            },
            {
              type: LaunchpadInformationContentType.LIST,
              content: [
                "**Common and Uncommon:** unlimited supply (for F2P players)",
                "**Rare, Epic, Legendary:** global daily supply limit between players",
                "**Limited Edition:** can only be caught during a limited-time campaign",
              ],
            },
            {
              type: LaunchpadInformationContentType.TEXT,
              content:
                "Dive into this revolutionary experience on the Xai network, made seamless by Arbitrum Orbit and the powerful Paima Engine. Best of all? Embark on this adventure without the hassle of bridging, and kickstart your legend for free!",
            },
            {
              type: LaunchpadInformationContentType.TEXT,
              content: "Notably, respawn rates are as follows:",
            },
            {
              type: LaunchpadInformationContentType.LIST,
              content: [
                "Rare: every hour",
                "Epic: every 4hrs",
                "Legendary: every 17hrs",
              ],
            },
            {
              type: LaunchpadInformationContentType.TEXT,
              content:
                "With the exception of Limited Edition monsters, each monster has a soft-cap on its level based on its rarity. Once the monster reaches the soft-cap level, it can only be leveled up by fusing copies of the same monster into it. This means even monsters you already own are still valuable, and acts as a deflationary pressure on the new limited supply monsters that appear daily.",
            },
            {
              type: LaunchpadInformationContentType.TEXT,
              content:
                "You can read more about monster trading in the [wiki](https://tarochi.fandom.com/wiki/Monster_Trading)",
            },
            {
              type: LaunchpadInformationContentType.GALLERY,
              imageURLs: [
                "/images/tarochi-information-image-2.jpg",
                "/images/tarochi-information-image-1.jpg",
              ],
            },
          ],
          [
            {
              type: LaunchpadInformationHeadingType.HEADING3,
              content: "Tarochi Gold",
            },
            {
              type: LaunchpadInformationContentType.TEXT,
              content:
                "Tarochi features Tarochi Gold (TGold) as the onchain currency for the world. Tarochi Gold is earned from competitive actions like participating in Arena battles against other players. Tarochi gold has a limited yet growing supply, and allows players to purchase whitelist cards to have a significant edge in capturing rare monsters. This IS meant to have financial value on the open market as it has a limited growth in supply and will trade starting with Arbitrum One. The initial supply of TGold will come purely from this pre-order + $3770 worth of TGold given to the top players of Jungle Wars: Tower Defense.",
            },
            {
              type: LaunchpadInformationContentType.TEXT,
              content:
                "Notably, the primary way to earn Tarochi Gold is to participate in Arena battles. Arena battles are a type of PVP where users do not all have to online at the same time. Instead, there are multiple arena matches going on in parallel continuously, and the champion of the arena at any given point earns Tarochi Gold (with participants who are not champions earning Tarochi Silver instead). To semi-active play, the arena is reset every 24hrs. When you battle a player in the arena, you are battles against an AI that controls their monsters, allowing multiple battles against the reigning champion to happen in parallel. The player with the highest score (defined by how well you did) by the end of the rotation becomes the new champion for that slot. Think of it like a fast-paced best player wins tournament. Our goal is to encourage a social fabric such as guilds working together and pooling rewards or players renting out monsters in exchange for a cut of any arena rewards.",
            },
          ],
        ],
      },
      {
        body: [
          [
            {
              type: LaunchpadInformationHeadingType.HEADING2,
              content: "Genesis Trainer Collection",
            },
            {
              type: LaunchpadInformationContentType.TEXT,
              content:
                "Pre-ordering for the Genesis Trainer tier gives you a Genesis Trainer NFT which will sent to your wallet once the pre-order is complete and provides multiple benefits including whitelist slots for limited-edition monsters, loyalty rewards and accelerated progress in-game (see Tarochi season pass section above for more information).",
            },
          ],
          [
            {
              type: LaunchpadInformationHeadingType.HEADING3,
              content: "Collection layout",
            },
            {
              type: LaunchpadInformationContentType.TEXT,
              content:
                "Genesis Trainers are capped at a 10,000 supply limit. Every purchase of the Genesis Trainer tier will get you an additional NFT once the pre-order is complete.",
            },
            {
              type: LaunchpadInformationContentType.LIST,
              content: [
                "Rare: every hour",
                "Epic: every 4hrs",
                "Legendary: every 17hrs",
              ],
            },
            {
              type: LaunchpadInformationContentType.TEXT,
              content:
                "For every increase in rarity of the frame, one rank is removed per trainer. (ex: for the golden frame, there will only be one rank 3 for a given trainer). To round it down to 10,000 NFTs, 80 red frame cards will be removed at random",
            },
          ],
        ],
      },
    ],
  },
};
