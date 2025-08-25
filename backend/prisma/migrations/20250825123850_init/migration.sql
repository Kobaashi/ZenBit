-- CreateTable
CREATE TABLE "public"."User" (
    "user_id" SERIAL NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_name" TEXT,
    "user_password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "public"."Deal" (
    "deal_id" SERIAL NOT NULL,
    "deal_imagesrc" TEXT NOT NULL,
    "deal_title" TEXT NOT NULL,
    "deal_dhs" INTEGER NOT NULL,
    "deal_tiket" INTEGER NOT NULL,
    "deal_yield" DOUBLE PRECISION NOT NULL,
    "deal_sold" INTEGER NOT NULL,
    "deal_daysleft" INTEGER NOT NULL,

    CONSTRAINT "Deal_pkey" PRIMARY KEY ("deal_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_email_key" ON "public"."User"("user_email");

-- CreateIndex
CREATE UNIQUE INDEX "User_user_password_key" ON "public"."User"("user_password");

-- CreateIndex
CREATE UNIQUE INDEX "Deal_deal_imagesrc_key" ON "public"."Deal"("deal_imagesrc");
