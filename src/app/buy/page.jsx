import Prices from "@/components/Prices";

export default async function BuyPage() {
    const resource = await fetch("http://localhost:3001/prices")
    const data = await resource.json()
    return (
        <Prices data={data} />
    );
}