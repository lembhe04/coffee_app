import { NextResponse } from "next/server";
import { verifySignature } from "@/utils/verifySignature";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const {
      name,
      amount,
      order_id,
      payment_id,
      signature,
    } = await req.json();

    const isValid = verifySignature(
      order_id,
      payment_id,
      signature
    );

    if (!isValid) {
      return NextResponse.json(
        { success: false },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("payments")
      .insert([
        {
          name,
          amount,
          order_id,
          payment_id,
          signature,
          status: "SUCCESS",
        },
      ]);

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}