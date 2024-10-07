import React, { useState } from "react";
import { DialogContent } from "../ui/dialog";
import tools from "@/public/assets/images/tools.png";
import Image from "next/image";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const item = {
  times: 5,
  amount: 12435.56,
};

const CryptoDialog = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("Bitcoin");
  const [address, setAddress] = useState("1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2");
  const itemsArray = Array.from({ length: 40 });

  const handleCryptoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const crypto = event.target.value;
    setSelectedCrypto(crypto);
    switch (crypto) {
      case "Bitcoin":
        setAddress("1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2");
        break;
      case "Ethereum":
        setAddress("0x24F75bCD64aD5a67Dd0D5d46cC196dfa3eeE2F71");
        break;
      case "Litecoin":
        setAddress("LTdsVS8VDw6syvfQADdhf2PHAm3rMGJvPX");
        break;
    }
  };

  return (
    <DialogContent className="w-[90%] sm:w-[486px] border-none flex justify-center items-center">
      <VisuallyHidden>
        <DialogTitle>CryptoDialog</DialogTitle>
      </VisuallyHidden>
      <div className="w-full sm:w-auto flex flex-col bg-[#1A1A19] border border-[#272625] rounded-2xl">
        <div className="flex items-center justify-center py-[14px] border-b border-b-[#272625]">
          <h2 className="leading-[19.2px] font-fredoka">
            Purchase with Ethereum
          </h2>
        </div>
        <div>
          <div className="mx-[24px] my-[12px] border-none">
            <div className="flex gap-[35px]">
              <div>
                <select
                  name="cryptocurrency"
                  id="crypto"
                  className="w-full text-[14px] tracking-wider hover:outline-none text-[#C9C9C9] bg-[#21201F] border border-[#292828] py-[8.5px] px-[12px] rounded-lg"
                  onChange={handleCryptoChange}
                  value={selectedCrypto}
                >
                  <option value="Bitcoin">Bitcoin (BTC)</option>
                  <option value="Ethereum">Ethereum (ETH)</option>
                  <option value="Litecoin">Litecoin (LTC)</option>
                </select>
                <div className="flex gap-2 mt-[9px]">
                  <h2 className="leading-[19.2px] font-semibold text-[14px] font-fredoka tracking-wider">
                    $1 USD ={" "}
                  </h2>
                  <Image
                    src={tools}
                    alt="image"
                    className="w-5 h-5 object-cover"
                  />
                  <h2 className="leading-[19.2px] font-semibold tracking-wider text-[14px] font-fredoka">
                    1.43
                  </h2>
                </div>
                <h2 className="mt-[15px] leading-[19.2px] text-wrap tracking-normal text-[#686868] text-[12px] font-fredoka">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </h2>
              </div>
              <img
                src="/assets/images/image 10ident.png"
                className=" h-[100px] object-cover"
                alt="identify"
              />
            </div>
          </div>
          <div className="mx-[26px] mb-[7px] mt-[23px] font-light">
                Your personal {selectedCrypto} address
            </div>
            <div className="mx-[26px] mb-[12px] flex gap-[9px]">
                <Input
                    type="text"
                    className="text-[14px] tracking-wider hover:outline-none text-[#686868] bg-[#21201F] border border-[#292828] py-[11.5px] px-[12px] rounded-lg flex-1"
                    placeholder={address}
                    disabled
                />
                <Button variant={"secondary"}>COPY ADDRESS</Button>
            </div>
          {/* <div className="mx-[26px] mb-[12px] flex gap-[9px]">
            <Input
              type="text"
              className="text-[14px] tracking-wider hover:outline-none text-[#686868] bg-[#21201F] border border-[#292828] py-[11.5px] px-[12px] rounded-lg flex-1"
              placeholder="0x24F75bCD64aD5a67Dd0D5d46cC196dfa3eeE2F71"
              disabled
            />
            <Button variant={"secondary"}>COPY ADRESS</Button>
          </div> */}
        </div>
      </div>
    </DialogContent>
  );
};

export default CryptoDialog;
