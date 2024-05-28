import useGetSellOrders from "@hooks/dex/useGetSellOrders";
import { Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { AssetMetadata } from "@utils/dex/types";
import { Fragment } from "react";
import { formatEther } from "viem";
import { useAccount } from "wagmi";
import CancelSellOrderButton from "./CancelSellOrderButton";

type Props = {
  assetMetadata: AssetMetadata;
  user?: `0x${string}`;
};

export default function SellOrdersGrid({ assetMetadata, user }: Props) {
  const { chainId } = useAccount();
  const { data: orders } = useGetSellOrders({ user });

  if (!orders) return <Typography>Loading...</Typography>;

  return (
    <Grid
      container
      spacing={2}
      sx={{ width: "100%", textAlign: "end", alignItems: "center" }}
    >
      <Grid xs={1}>
        <Typography>Order ID</Typography>
      </Grid>
      <Grid xs={2}>
        <Typography>Asset Token ID</Typography>
      </Grid>
      <Grid xs={2}>
        <Typography>Amount</Typography>
      </Grid>
      <Grid xs={2}>
        <Typography>Price/unit</Typography>
      </Grid>
      <Grid xs={2}>
        <Typography>Total</Typography>
      </Grid>
      <Grid xs={3}></Grid>
      <Divider />
      {orders.map((order) => (
        <Fragment key={order.orderid}>
          <Grid xs={1}>
            <Typography>{order.orderid}</Typography>
          </Grid>
          <Grid xs={2}>
            <Typography>{order.assettokenid}</Typography>
          </Grid>
          <Grid xs={2}>
            <Typography>
              {order.amount} {assetMetadata.symbol}
            </Typography>
          </Grid>
          <Grid xs={2}>
            <Typography>{formatEther(BigInt(order.price))} ETH</Typography>
          </Grid>
          <Grid xs={2}>
            <Typography>
              {formatEther(BigInt(order.price) * BigInt(order.amount))} ETH
            </Typography>
          </Grid>
          <Grid xs={3}>
            <CancelSellOrderButton
              orderId={order.orderid}
              dexAddress={assetMetadata.dexAddress[chainId!]}
            />
          </Grid>
        </Fragment>
      ))}
    </Grid>
  );
}
