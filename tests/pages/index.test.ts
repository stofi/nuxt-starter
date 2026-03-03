import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, it } from "vitest";
import IndexPage from "~/pages/index.vue";

describe("Index page", () => {
  it("mounts without errors", async () => {
    const wrapper = await mountSuspended(IndexPage);
    expect(wrapper.html()).toBeTruthy();
  });
});
