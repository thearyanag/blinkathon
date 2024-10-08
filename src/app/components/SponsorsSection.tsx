import bags from "@/assets/svgs/sponsors/bags.svg";
import carrot from "@/assets/svgs/sponsors/carrot.svg";
import dialect from "@/assets/svgs/sponsors/dialect.svg";
import helius from "@/assets/svgs/sponsors/helius.svg";
import juicebox from "@/assets/svgs/sponsors/JuiceBoxLogo.svg";
import metaplex from "@/assets/svgs/sponsors/metaplex.svg";
import okxwallet from "@/assets/svgs/sponsors/okxwallet.svg";
import solanafoundation from "@/assets/svgs/sponsors/solanafoundation.svg";
import squads from "@/assets/svgs/sponsors/squads.svg";
import stgermany from "@/assets/svgs/sponsors/stgermany.svg";
import stindia from "@/assets/svgs/sponsors/stindia.svg";
import stvietnam from "@/assets/svgs/sponsors/stvietnam.svg";
import tensor from "@/assets/svgs/sponsors/tensor.svg";
import send from "@/assets/svgs/sponsors/send.svg";
import kamino from "@/assets/svgs/sponsors/kamino.svg";
import alldomains from "@/assets/svgs/sponsors/alldomains.svg";

import sponsorSvg from "@/assets/svgs/sponsorsSVG.svg";
import Image from "next/image";
import { sponsorList } from "../data/sponsorList";

export const SponsorsSection = () => {
  return (
    <>
      <div className="w-full">
        <div className="text-[#1C71FF] text-[94px] flex justify-center m-4">
          {" "}
          Sponsors{" "}
        </div>

        <div className="flex flex-wrap gap-16 align-middle items-center justify-center ">
          {sponsorList.map(
            (sponsor, index) =>
              sponsor?.name !== "" && (
                <div
                  className="flex items-center justify-center"
                  key={sponsor.name}
                >
                  <Image
                    key={index}
                    className="w-104 p-2 flex justify-center items-center"
                    src={
                      sponsor?.name === "solanafoundation"
                        ? solanafoundation
                        : sponsor?.name === "metaplex"
                        ? metaplex
                        : sponsor?.name === "bags"
                        ? bags
                        : sponsor?.name === "carrot"
                        ? carrot
                        : sponsor?.name === "dialect"
                        ? dialect
                        : sponsor?.name === "helius"
                        ? helius
                        : sponsor?.name === "okxwallet"
                        ? okxwallet
                        : sponsor?.name === "squads"
                        ? squads
                        : sponsor?.name === "stindia"
                        ? stindia
                        : sponsor?.name === "stvietnam"
                        ? stvietnam
                        : sponsor?.name === "tensor"
                        ? tensor
                        : sponsor?.name === "juicebox"
                        ? juicebox
                        : sponsor?.name === "stgermany"
                        ? stgermany
                        : sponsor?.name === "kamino"
                        ? kamino
                        : sponsor?.name === "alldomains"
                        ? alldomains
                        : ""
                    }
                    alt="Sponsors"
                    width={240}
                    height={240}
                  />
                </div>
              )
          )}
        </div>

        <Image
          className="w-full h-full"
          src={sponsorSvg}
          alt="Sponsors"
          width={1000}
          height={1000}
        />
      </div>
    </>
  );
};
